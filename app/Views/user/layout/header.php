<!-- header -->
<div class="top-header-area" id="sticker">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-sm-12 text-center">
				<div class="main-menu-wrap">
					<!-- logo -->
					<div class="site-logo">
						<a href="<?= base_url('/') ?>">
							<img style="width: 55%;" src="<?=base_url('assets-user')?>/img/[LT]-Dinada.png" alt="Dinada Logo">
						</a>
					</div>
						<!-- logo -->

						<!-- menu start -->
						<nav class="main-menu">
                            <ul id="menu-list">
                                <li><a href="<?= base_url('/') ?>">Home</a></li>
                                <li><a href="<?= base_url('about') ?>">About</a></li>
                                <li><a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="<?= base_url('produk/detail')?>">Single Product</a></li>
                                        <li><a href="checkout.html">Check Out</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="shop.html">Shop</a></li>
                                    </ul>
                                </li>
                                <li><a href="news.html">News</a>
                                    <ul class="sub-menu">
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="single-news.html">Single News</a></li>
                                    </ul>
                                </li>
                                <li><a href="<?= base_url('contact')?>">Contact</a></li>
                                <li><a href="<?= base_url('produk')?>">Shop</a>
                                    <!-- <ul class="sub-menu">
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="checkout.html">Check Out</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                    </ul> -->
                                </li>
                                <li>
                                    <div class="header-icons">
                                        <a class="shopping-cart" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
						<div class="mobile-menu"></div>
						<!-- menu end -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end header -->

    <script>
    document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('#menu-list li a');

    menuItems.forEach(item => {
        // Cek jika URL-nya sesuai dengan halaman yang sedang dibuka
        if (item.href === currentLocation || item.href === currentLocation.split('#')[0].split('?')[0]) {
            item.parentElement.classList.add('current-list-item');
        } else {
            item.parentElement.classList.remove('current-list-item');
        }
    });
});

</script>