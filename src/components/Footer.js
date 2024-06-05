import '../../src/pages/css/footer.css';
import img from '../images/pay.png'
import logo from '../images/logo.png'

export function Footer() {
    return (
        <>
            <div class="footer-bottom">

                <div class="wrapper">
                    <p class="copyright">
                        © 2024 by Անի Գրիգորյան
                    </p>

                    <ul class="social-list">

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-twitter" role="img" class="md hydrated" aria-label="logo twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-facebook" role="img" class="md hydrated" aria-label="logo facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-youtube" role="img" class="md hydrated" aria-label="logo youtube"></ion-icon>
                            </a>
                        </li>

                    </ul>
                </div>

                <a href="#" class="logo">
                    <img src={logo} width={"150px"}/>
                </a>

                <img src={img} width={"313"} height={"28"} alt={"available all payment method"} className={"w-100"} />

            </div>
        </>
    )
}