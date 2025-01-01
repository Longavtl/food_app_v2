import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="row mx-0" style={{ marginTop: "117px" }}>
                <div className="px-0 image-container" style={{ height: "600px" }}>
                    <img
                        src="https://theme.hstatic.net/200000240163/1000702133/14/slideshow_1.jpg?v=339"
                        width={"100%"}
                        height={"100%"}
                        alt="Về Chúng Tôi Banner"
                    />
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mx-0 px-5 py-3">
                    <div className="col-12 text-secondary py-5">
                        <div>
                            <h4 style={{ textAlign: "center" }}>Về Chúng Tôi</h4>
                        </div>
                        <hr />

                        <div className="accordion-header mt-2 ms-2" style={{ marginBottom: '1rem' }}>
                            <button
                                className="accordion-button fs-6 fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ourMission"
                                aria-expanded="true"
                                aria-controls="ourMission"
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    padding: '0.75rem 1.25rem',
                                }}
                            >
                                Sứ Mệnh Của Chúng Tôi
                            </button>
                        </div>
                        <div
                            id="ourMission"
                            className="accordion-collapse collapse show"
                            aria-labelledby="ourMission"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="p-3">
                                <p>
                                    Sứ mệnh của chúng tôi là mang đến cho khách hàng những loại rau củ tươi ngon, chất lượng cao nhất, được canh tác và thu hoạch theo tiêu chuẩn bền vững. Chúng tôi cam kết cung cấp thực phẩm sạch, an toàn và lành mạnh, góp phần nâng cao sức khỏe và chất lượng cuộc sống của cộng đồng.
                                </p>
                            </div>
                        </div>

                        <div className="accordion-header mt-2 ms-2" style={{ marginBottom: '1rem' }}>
                            <button
                                className="accordion-button fs-6 fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ourTeam"
                                aria-expanded="true"
                                aria-controls="ourTeam"
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    padding: '0.75rem 1.25rem',
                                }}
                            >
                                Đội Ngũ Của Chúng Tôi
                            </button>
                        </div>
                        <div
                            id="ourTeam"
                            className="accordion-collapse collapse show"
                            aria-labelledby="ourTeam"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="p-3">
                                <p>
                                    Chúng tôi là một đội ngũ đam mê nông nghiệp xanh và phát triển bền vững. Từ những người nông dân đến các chuyên gia chăm sóc khách hàng, tất cả đều cùng hướng tới mục tiêu cung cấp sản phẩm tươi sạch và an toàn. Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ khách hàng với sự nhiệt tình và chuyên nghiệp.
                                </p>
                            </div>
                        </div>

                        <div className="accordion-header mt-2 ms-2" style={{ marginBottom: '1rem' }}>
                            <button
                                className="accordion-button fs-6 fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#ourValues"
                                aria-expanded="true"
                                aria-controls="ourValues"
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    padding: '0.75rem 1.25rem',
                                }}
                            >
                                Giá Trị Cốt Lõi
                            </button>
                        </div>
                        <div
                            id="ourValues"
                            className="accordion-collapse collapse show"
                            aria-labelledby="ourValues"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="p-3">
                                <p>
                                    Chất lượng, an toàn và bền vững là những giá trị cốt lõi mà chúng tôi luôn tuân thủ. Chúng tôi không chỉ quan tâm đến sức khỏe của khách hàng mà còn chú trọng đến sự phát triển bền vững của môi trường. Với mỗi sản phẩm, chúng tôi cam kết mang đến giá trị thật và sự tin cậy dài lâu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;
