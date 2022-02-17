function namaSekolah() {
	$.ajax({
		url: 'https://api-sekolah-indonesia.herokuapp.com/',
		type: 'get',
		dataType: 'json',
		data: {
			'page': 1,
			'perPage': 5,
			'sekolah': 'SMK'
		},
		
		success: function (result) {
			if (result.Response == "success") {
				let movies = result.Search;
				
				$.each(movies, function (i, data) {
					$('#nama-sekolah').append(`
						<div class="col-md-3 mb-5">
							<div class="card h-100">
								<img src="`+ data.Poster + `" class="card-img-top movie-poster" alt="">
								<div class="card-body text-center">
									<h2 class="card-title movie-title">`+ data.sekolah +`</h2>
									<p class="card-subtitle mb-2 text-muted">`+ data.bentuk +`</p>
									<a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
								</div>
							</div>
						</div>
					`);
				});

				// Menghilangkan input di search bar
				$('#search-input').val('');
					
			}
			

		}
		
		
	});
}

console.log(namaSekolah);