import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import classNames from "classnames";
import styles from "../../styles/services.module.css";
import PagePatternLayout from "../../layouts/PagePatternLayout";

const Services = () => {
    return (
        <>
            <PagePatternLayout
                pageTitle={
                    <>
                        Услуги компании <br /> ”Богатырь - Камин”
                    </>
                }
                pageText={
                    <>
                        <span>
                            Компания богатырь камин предоставляет полный
                            комплекс услуг
                        </span>
                        <br />
                        по монтажу и обслуживании каминов и барбекю и печей
                    </>
                }
                isDots={true}
                srcImage={"/images/portfolio-bg.png"}
            >
                <header className={styles.services__header}>
                    <div className={styles.header__wrapper}>
                        <hr className={styles.services_header__line} />
                        <h1 className={styles.services_header__title}>
                            <span>
                                {" "}
                                Все заботы мы возьмем на себя. <br />
                            </span>{" "}
                            От проектирования камина до <br /> монтажа у вас
                            дома
                        </h1>
                        <div className={styles.services__items}>
                            <div className={styles.services__item}>
                                <div
                                    className={classNames(
                                        styles.services__item_img,
                                        styles.services__item_img__margin
                                    )}
                                >
                                    <img src="/images/services1.png" alt="" />
                                </div>
                                <div className={styles.services__item_info}>
                                    <h3 className={styles.services__item_title}>
                                        Разработка чертежа + 3D <br />
                                        проектирование
                                    </h3>
                                    <p className={styles.services__item_text}>
                                        Бесплатно разработаем чертёж вашего
                                        камина и создадим 3D визуализацию с
                                        учетом всех характеристик вашего камина,
                                        проконсультируем и подберём лучшее
                                        решение
                                    </p>
                                    <div className={styles.services__item_btn}>
                                        <p>Заказать услугу</p>
                                        <div
                                            className={
                                                styles.services__btn_arrow
                                            }
                                        >
                                            <img
                                                src="/images/button-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.services__item}>
                                <div className={styles.services__item_img}>
                                    <img src="/images/services2.png" alt="" />
                                </div>
                                <div className={styles.services__item_info}>
                                    <h3 className={styles.services__item_title}>
                                        Монтаж каминов под ключ
                                    </h3>
                                    <p className={styles.services__item_text}>
                                        Lorem Ipsum - это текст-{"рыба"}, часто
                                        используемый в печати и вэб-дизайне.
                                        Lorem Ipsum является стандартной{" "}
                                        {"рыбой"} для текстов на латинице с
                                        нмачала XVI века. В то время некий
                                        безымянный печатник создал большую
                                        коллекцию размеров и форм шрифтов
                                    </p>
                                    <div className={styles.services__item_btn}>
                                        <p>Заказать услугу</p>
                                        <div
                                            className={
                                                styles.services__btn_arrow
                                            }
                                        >
                                            <img
                                                src="/images/button-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.services__item}>
                                <div
                                    className={classNames(
                                        styles.services__item_img,
                                        styles.services__item_img__margin2
                                    )}
                                >
                                    <img src="/images/services3.png" alt="" />
                                </div>
                                <div className={styles.services__item_info}>
                                    <h3 className={styles.services__item_title}>
                                        Доставка
                                    </h3>
                                    <p className={styles.services__item_text}>
                                        Lorem Ipsum - это текст-{"рыба"}, часто
                                        используемый в печати и вэб-дизайне.
                                        Lorem Ipsum является стандартной{" "}
                                        {"рыбой"} для текстов на латинице с
                                        начала XVI века. В то время некий
                                        безымянный печатник создал большую
                                        коллекцию размеров и форм шрифтов
                                    </p>
                                    <div className={styles.services__item_btn}>
                                        <p>Заказать услугу</p>
                                        <div
                                            className={
                                                styles.services__btn_arrow
                                            }
                                        >
                                            <img
                                                src="/images/button-arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Contacts margin={true} />
            </PagePatternLayout>
        </>
    );
};

export default Services;
