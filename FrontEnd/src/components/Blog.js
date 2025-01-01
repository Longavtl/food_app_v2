import React from 'react';
import Header from './Header';
import Footer from './Footer';

const VeggieStore = () => {
    const products = [
        {
            id: 1,
            title: 'Rau Xanh Tươi Mát',
            excerpt: 'Rau xanh giàu dinh dưỡng, an toàn, không chất bảo quản, thích hợp cho bữa ăn gia đình.',
            image: 'https://theme.hstatic.net/200000240163/1000702133/14/slideshow_1.jpg?v=339',
            price: '40,000 VND / 500g',
            date: 'Hàng mới về'
        },
        {
            id: 2,
            title: 'Cà Chua Chín Tươi',
            excerpt: 'Cà chua ngọt, giàu vitamin, tươi ngon phù hợp cho các món salad và nấu ăn hàng ngày.',
            image: 'https://theme.hstatic.net/200000240163/1000702133/14/slideshow_3.jpg?v=339',
            price: '30,000 VND / 1kg',
            date: 'Giảm giá 10%'
        },
        {
            id: 3,
            title: 'Dưa Chuột Hữu Cơ',
            excerpt: 'Dưa chuột giòn, ngọt, an toàn và không sử dụng chất bảo quản.',
            image: 'https://theme.hstatic.net/200000240163/1000702133/14/slideshow_2.jpg?v=339',
            price: '25,000 VND / 500g',
            date: 'Bán chạy nhất'
        }
    ];

    return (
        <div>
            <Header />
            <div className="row mx-0" style={{ marginTop: '117px' }}>
                <div className="px-0 image-container" style={{ height: '600px' }}>
                    <img
                        src="https://theme.hstatic.net/200000240163/1000702133/14/slideshow_1.jpg?v=339"
                        width={'100%'}
                        height={'100%'}
                        alt="Banner Veggie Store"
                    />
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mx-0 px-5 py-3">
                    <div className="col-12 text-secondary py-5">
                        <div>
                            <h4 style={{ textAlign: 'center' }}>Sản Phẩm Rau Củ Tươi & Nổi Bật</h4>
                        </div>
                        <hr />

                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.excerpt}</p>
                                            <p className="card-text"><strong>Giá: {product.price}</strong></p>
                                            <a href={`/product/${product.id}`} className="btn btn-success">
                                                Xem Chi Tiết
                                            </a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            {product.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VeggieStore;
