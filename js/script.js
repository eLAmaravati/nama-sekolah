function semuaSekolah() {
	$.getJSON('https://api-sekolah-indonesia.herokuapp.com/sekolah?page=1&perPage=100', function (data) {
	
		let daftarSekolah = data.dataSekolah;
	
		$.each(daftarSekolah, function (i, data) {
			$('#nama-sekolah').append(`
			
			<tr>
					<th scope="row" class="count"></th>
					<td>`+ data.bentuk +`</td>
					<td>`+ data.sekolah +`</td>
					<td>`+ data.npsn +`</td>
					<td>`+ data.propinsi +`</td>
					<td>`+ data.kabupaten_kota +`</td>
			</tr>
			`)
			
		});
	});	
}

semuaSekolah();


// Navbar Brand
$('.navbar-brand').on('click', function () {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
	semuaSekolah();
});


// Menu Navigation
$('.nav-link').on('click', function () {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	// Ganti H1
	let navigasi = $(this).html();
	$('#jenjang-navigasi').html(navigasi);

	
	// Mengganti konten sesuai menu
	$.getJSON('https://api-sekolah-indonesia.herokuapp.com/sekolah?page=1&perPage=50', function (data) {
		
		let daftarSekolah = data.dataSekolah;
		let jenjangSekolah = '';

		$.each(daftarSekolah, function (i, data) {
			if (data.bentuk == navigasi) {
				jenjangSekolah += `
				<tr>
				<th scope="row" class="count"></th>
				<td>`+ data.bentuk + `</td>
				<td>`+ data.sekolah + `</td>
				<td>`+ data.npsn + `</td>
				<td>`+ data.propinsi + `</td>
				<td>`+ data.kabupaten_kota + `</td>
		</tr>`;
			}
		});

		$('#nama-sekolah').html(jenjangSekolah);
	});
	
	
});