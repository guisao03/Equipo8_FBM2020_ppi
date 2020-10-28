import React from 'react';
import '../styles/Footer.css'


function Footer(props) {
    return (
        <footer>
             <div class="icon-text-text">
                <ul class="social">
                    <li>
                        <a href="Correo:vallejo.timo15@gmail.com" target="_blank">
                            <i class="fa fa-envelope-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com/profile.php?id=100023930166598&ref=content_filter" target="_blank">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="htpp://instagram.com/@vallejo_timo15" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <p class="text"><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptas.</em></p>


            </div>
            <div class="segundo-footer">
                <p>
                    &copy; <a href="Index.html" target="_blank">Olympo Fitness</a>
                </p>
            </div>
        </footer>

    );
    
}
export default Footer;