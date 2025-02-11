import HeroImage from '../assets/photos/hero-img1.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Left=({currentId})=>{
    return(
        <>
        <div className="left-sidebar animate__animated animate__fadeInLeft">
            <div className="left">
                <ul>     
                   <li>
                        <a href="#list-item1" className={currentId==='list-item1'? "active list-item": "list-item"}>
                            <button type="button">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M24.2188 3.125C22.065 3.125 20.2133 3.9777 18.2786 5.39605C16.4013 6.77243 14.2866 8.80447 11.6183 11.3684L11.5464 11.4376L6.25 16.3406V27.4217C6.24996 31.2038 6.24994 34.1993 6.56448 36.5437C6.88817 38.9564 7.5702 40.9094 9.10701 42.4495C10.6438 43.9895 12.5926 44.6729 15.0002 44.9974C17.3397 45.3125 20.3289 45.3125 24.1027 45.3125H24.3346C28.1086 45.3125 31.0978 45.3125 33.4372 44.9974C35.8448 44.6729 37.7937 43.9895 39.3306 42.4495C40.8673 40.9094 41.5493 38.9564 41.8731 36.5437C42.1875 34.1993 42.1875 31.2038 42.1875 27.4219V16.3406L36.8911 11.4376L36.8193 11.3685C34.1508 8.80449 32.0363 6.77243 30.1589 5.39607C28.2242 3.9777 26.3725 3.125 24.2188 3.125Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.875 35.1562C21.875 33.8617 22.9205 32.8125 24.2103 32.8125C25.4894 32.8125 26.5625 33.8657 26.5625 35.1562C26.5625 36.4468 25.4894 37.5 24.2103 37.5C22.9205 37.5 21.875 36.4508 21.875 35.1562Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3893 8.74333C18.7263 9.94313 16.7807 11.7772 13.9931 14.4132L5.04767 22.8725C4.22661 23.6488 2.9228 23.6218 2.13552 22.8121C1.34823 22.0025 1.3756 20.7165 2.19665 19.9402L11.2491 11.3797C13.9043 8.86874 16.0462 6.84325 17.957 5.4646C19.9442 4.0308 21.9072 3.125 24.2188 3.125C26.5303 3.125 28.4934 4.0308 30.4806 5.4646C32.3913 6.84327 34.5332 8.86874 37.1885 11.3798L46.2409 19.9402C47.0619 20.7165 47.0893 22.0025 46.3021 22.8121C45.5149 23.6218 44.2109 23.6488 43.3899 22.8725L34.4444 14.4133C31.6568 11.7772 29.7113 9.94315 28.0483 8.74333C26.4362 7.58019 25.3197 7.18751 24.2188 7.18751C23.1179 7.18751 22.0013 7.58019 20.3893 8.74333Z" fill="white"/>
                            </svg>
                            </button>
                            <button type="button">Home</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item2" className={currentId==='list-item2'? "active list-item": "list-item"}>
                            <button type="button">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5471 4.6875H13.1405C12.0698 4.68746 11.1459 4.68744 10.3851 4.75199C9.58206 4.82012 8.78333 4.97056 8.01475 5.37723C6.86815 5.98392 5.93591 6.95202 5.35168 8.14272C4.96008 8.94087 4.81521 9.77031 4.7496 10.6043C4.68744 11.3943 4.68746 12.3535 4.6875 13.4654V38.0968C4.68746 39.2089 4.68744 40.1682 4.7496 40.9582C4.81521 41.7922 4.96008 42.6217 5.35168 43.4198C5.93591 44.6106 6.86815 45.5786 8.01475 46.1852C8.78333 46.5919 9.58206 46.7423 10.3851 46.8105C11.1459 46.875 12.0697 46.875 13.1404 46.875H16.5471C17.6178 46.875 18.5416 46.875 19.3024 46.8105C20.1055 46.7423 20.9042 46.5919 21.6728 46.1852C22.8195 45.5786 23.7516 44.6106 24.3358 43.4198C24.7274 42.6217 24.8722 41.7922 24.9378 40.9582C25 40.1682 25 39.2089 25 38.097V13.4656C25 12.3537 25 11.3944 24.9378 10.6043C24.8722 9.77031 24.7274 8.94087 24.3358 8.14272C23.7516 6.95202 22.8195 5.98392 21.6728 5.37723C20.9042 4.97056 20.1055 4.82012 19.3024 4.75199C18.5416 4.68744 17.6177 4.68746 16.5471 4.6875ZM14.8438 38.4375C15.9656 38.4375 16.875 37.4931 16.875 36.3281C16.875 35.1631 15.9656 34.2187 14.8438 34.2187C13.7219 34.2187 12.8125 35.1631 12.8125 36.3281C12.8125 37.4931 13.7219 38.4375 14.8438 38.4375Z" fill="white"/>
                            <path opacity="0.2" d="M26.5625 39.0625L40.2655 25.5463C41.0296 24.7925 41.6888 24.1425 42.1874 23.5632C42.7135 22.9518 43.1801 22.2876 43.449 21.471C43.8503 20.2528 43.8503 18.9406 43.449 17.7223C43.1801 16.9058 42.7135 16.2416 42.1874 15.6302C41.6888 15.051 41.0296 14.4008 40.2655 13.6472L37.8346 11.2496C37.0707 10.4959 36.4115 9.84568 35.8242 9.35393C35.2046 8.8349 34.5312 8.37469 33.7033 8.10936C32.4683 7.71355 31.1378 7.71355 29.9028 8.10936C29.0749 8.37469 28.4016 8.8349 27.7817 9.35393C27.4086 9.66633 27.0067 10.0426 26.5672 10.4688C26.606 11.2009 26.606 12.0192 26.606 12.8556V36.59C26.606 37.4592 26.606 38.309 26.5625 39.0625Z" fill="white"/>
                            <path opacity="0.2" d="M23.4343 44.7012L21.875 45.3125H36.5814C37.6873 45.3127 38.6415 45.3127 39.4274 45.2514C40.2568 45.1867 41.082 45.0438 41.8757 44.658C43.06 44.0819 44.023 43.1631 44.6264 42.0328C45.0309 41.2752 45.1805 40.4879 45.2483 39.6965C45.3125 38.9464 45.3125 38.0358 45.3125 36.9804V33.6225C45.3125 32.567 45.3125 31.6565 45.2483 30.9065C45.1805 30.115 45.0309 29.3276 44.6264 28.5701C44.2066 27.7839 43.6129 27.0997 42.8915 26.5625C42.5861 26.862 42.2651 27.1682 41.9405 27.4779L24.8068 43.8288C24.4143 44.2034 23.9477 44.5 23.4343 44.7012Z" fill="white"/>
                            </svg>
                            </button>
                            <button type="button">About Us</button>
                        </a>
                    </li>

                    <li>    
                        <a href="#list-item3" className={currentId==='list-item3'? "active list-item": "list-item"}>
                            <button type="button">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M48.403 18.5323C48.3911 17.9007 48.3851 17.5849 48.1851 17.3862C47.9848 17.1875 47.6701 17.1875 47.0406 17.1875H2.95938C2.32988 17.1875 2.01513 17.1875 1.81505 17.3862C1.61496 17.5849 1.60896 17.9007 1.59698 18.5323C1.56248 20.3514 1.56248 22.3607 1.5625 24.5781V24.8429C1.56248 29.914 1.56246 33.8969 1.97544 37.0069C2.39866 40.1935 3.28366 42.7219 5.24598 44.7085C7.20833 46.6951 9.70588 47.591 12.8537 48.0194C15.9256 48.4375 19.86 48.4375 24.8692 48.4375H25.1308C30.14 48.4375 34.0745 48.4375 37.1463 48.0194C40.2941 47.591 42.7917 46.6951 44.754 44.7085C46.7164 42.7219 47.6013 40.1935 48.0245 37.0069C48.4375 33.8969 48.4375 29.914 48.4375 24.8429V24.5781C48.4375 22.3609 48.4375 20.3514 48.403 18.5323Z" fill="white"/>
                            <path d="M24.347 1.5625H24.0905C19.1744 1.56248 15.313 1.56245 12.2983 1.97292C9.20899 2.39357 6.75788 3.27319 4.83202 5.22358C2.90618 7.17399 2.03763 9.65635 1.62228 12.785C1.55872 13.2638 1.52695 13.5031 1.62466 13.6942C1.6734 13.7895 1.74922 13.8773 1.83602 13.939C2.01001 14.0625 2.25647 14.0625 2.74938 14.0625H45.6881C46.1809 14.0625 46.4276 14.0625 46.6015 13.939C46.6883 13.8773 46.7642 13.7895 46.8129 13.6942C46.9105 13.5031 46.8789 13.2638 46.8151 12.785C46.4 9.65635 45.5313 7.17399 43.6054 5.22358C41.6796 3.27319 39.2286 2.39357 36.1392 1.97292C33.1245 1.56245 29.2631 1.56248 24.347 1.5625Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 26.4915C12.5 25.6678 13.1844 25 14.0285 25H16.0666C16.9108 25 17.5951 25.6678 17.5951 26.4915C17.5951 27.3152 16.9108 27.983 16.0666 27.983H14.0285C13.1844 27.983 12.5 27.3152 12.5 26.4915ZM20.6522 26.4915C20.6522 25.6678 21.3365 25 22.1807 25H34.409C35.2531 25 35.9375 25.6678 35.9375 26.4915C35.9375 27.3152 35.2531 27.983 34.409 27.983H22.1807C21.3365 27.983 20.6522 27.3152 20.6522 26.4915ZM12.5 34.446C12.5 33.6223 13.1844 32.9545 14.0285 32.9545H16.0666C16.9108 32.9545 17.5951 33.6223 17.5951 34.446C17.5951 35.2697 16.9108 35.9375 16.0666 35.9375H14.0285C13.1844 35.9375 12.5 35.2697 12.5 34.446ZM20.6522 34.446C20.6522 33.6223 21.3365 32.9545 22.1807 32.9545H34.409C35.2531 32.9545 35.9375 33.6223 35.9375 34.446C35.9375 35.2697 35.2531 35.9375 34.409 35.9375H22.1807C21.3365 35.9375 20.6522 35.2697 20.6522 34.446Z" fill="white"/>
                            </svg>
                            </button>
                            <button type="button">Our Service</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item4" className={currentId==='list-item4'? "active list-item": "list-item"}>
                            <button>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M37.0346 28.0778C37.3575 27.6098 37.5188 27.3757 37.4983 27.1493C37.4777 26.9229 37.2905 26.7357 36.9161 26.3612L23.64 13.0839C23.2656 12.7096 23.0786 12.5224 22.852 12.5018C22.6256 12.4811 22.3915 12.6425 21.9234 12.9652C20.0851 14.2325 18.2945 14.7379 16.4121 14.922L16.332 14.9299C14.8895 15.0709 13.6936 15.1879 12.7601 15.3711C11.8104 15.5575 10.8802 15.8543 10.1454 16.5278C9.44263 17.1719 9.06784 17.9732 8.80682 18.8304C8.56132 19.6367 8.3732 20.65 8.15388 21.8313L5.2147 37.6599C4.9547 39.0595 4.72803 40.2797 4.69253 41.2542C4.65478 42.291 4.81406 43.4174 5.69828 44.3016C6.58251 45.186 7.70899 45.3453 8.74571 45.3074C9.72015 45.272 10.9402 45.0452 12.3397 44.7854L28.1676 41.846C29.349 41.6267 30.3621 41.4384 31.1684 41.193C32.0253 40.9321 32.8268 40.5572 33.4707 39.8546C34.1442 39.12 34.4412 38.1898 34.6276 37.2401C34.811 36.3065 34.9281 35.1105 35.0694 33.6676L35.0772 33.5876C35.2615 31.7056 35.7672 29.9159 37.0346 28.0778Z" fill="white"/>
                            <path d="M39.5934 9.87148C37.9904 8.26834 36.6638 6.94181 35.4783 6.06374C34.2294 5.13888 32.9068 4.53446 31.3365 4.72146C29.2606 4.96868 27.6893 6.34677 26.555 7.67197C26.1462 8.1497 25.758 8.6662 25.3977 9.1775C25.1209 9.57014 24.9825 9.76648 25.0018 9.99286C25.0213 10.2193 25.1955 10.3933 25.5434 10.7414L39.2575 24.4566C39.6056 24.8047 39.7798 24.9787 40.0061 24.9982C40.2326 25.0177 40.429 24.8792 40.8215 24.6025C41.3333 24.2419 41.85 23.8535 42.3278 23.4446C43.6531 22.3103 45.0313 20.7391 45.2786 18.6631C45.4654 17.093 44.8611 15.7704 43.9363 14.5216C43.0582 13.3359 41.7316 12.0095 40.1284 10.4065L39.5934 9.87148Z" fill="white"/>
                            <path d="M32.8125 23.4375L23.4375 14.0625C23.4478 14.0734 23.4583 14.0842 23.469 14.0948L32.8125 23.4375Z" fill="white"/>
                            <path d="M7.63949 45.3125L20.0451 32.9082C20.8371 33.3409 21.6945 33.6241 22.5762 33.7674C23.715 33.9523 24.7878 33.1791 24.9727 32.0404C25.1575 30.9019 24.3845 29.829 23.2457 29.6441C22.4667 29.5178 21.8113 29.1915 21.3098 28.6899C20.8081 28.1884 20.4818 27.533 20.3554 26.7541C20.1705 25.6157 19.0976 24.8425 17.9589 25.0273C16.8201 25.2121 16.0469 26.2851 16.2318 27.4235C16.3749 28.3053 16.6582 29.1625 17.091 29.9545L4.6875 42.3567C4.78751 43.0652 5.05382 43.7649 5.64491 44.3559C6.23472 44.9455 6.9326 45.212 7.63949 45.3125Z" fill="white"/>
                            </svg>
                            </button>
                            <button type="button">My Skill</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item5" className={currentId==='list-item5'? "active list-item": "list-item"}>
                            <button type="button">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M2.66049 41.3505C2.50527 41.7447 2.35878 42.1165 2.23349 42.457C1.81933 43.5819 1.18249 44.7231 1.94476 45.8663C2.36496 46.4964 3.07249 46.875 3.82994 46.875H24.2187C36.7313 46.875 46.875 36.7313 46.875 24.2188C46.875 11.706 36.7313 1.5625 24.2187 1.5625C11.706 1.5625 1.5625 11.706 1.5625 24.2188C1.5625 27.8324 2.41 31.2542 3.91952 34.291C4.66437 36.263 3.52628 39.1524 2.66049 41.3505Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 19.5312C15.625 20.8257 14.5757 21.875 13.2812 21.875C11.9868 21.875 10.9375 20.8257 10.9375 19.5312C10.9375 18.2368 11.9868 17.1875 13.2812 17.1875C14.5757 17.1875 15.625 18.2368 15.625 19.5312ZM15.625 28.9062C15.625 30.2007 14.5757 31.25 13.2812 31.25C11.9868 31.25 10.9375 30.2007 10.9375 28.9062C10.9375 27.6118 11.9868 26.5625 13.2812 26.5625C14.5757 26.5625 15.625 27.6118 15.625 28.9062ZM17.9688 19.5312C17.9688 18.2368 19.0181 17.1875 20.3125 17.1875H36.7188C38.0132 17.1875 39.0625 18.2368 39.0625 19.5312C39.0625 20.8257 38.0132 21.875 36.7188 21.875H20.3125C19.0181 21.875 17.9688 20.8257 17.9688 19.5312ZM17.9688 28.9062C17.9688 27.6118 19.0181 26.5625 20.3125 26.5625H36.7188C38.0132 26.5625 39.0625 27.6118 39.0625 28.9062C39.0625 30.2007 38.0132 31.25 36.7188 31.25H20.3125C19.0181 31.25 17.9688 30.2007 17.9688 28.9062Z" fill="white"/>
                                </svg>
                            </button>
                            <button type="button">Portfolio</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item6" className={currentId==='list-item6'? "active list-item": "list-item"}>
                            <button type="button">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_8679_11829)">
                                <path d="M17.0898 15.625C13.6951 15.625 10.9375 18.0762 10.9375 21.0938C10.9375 24.1113 13.6951 26.5625 17.0898 26.5625C17.3865 26.5625 17.6831 26.5234 17.9688 26.4844V27.3438C17.9688 28.6328 16.7822 29.6875 15.332 29.6875C13.8763 29.6875 12.6953 30.7373 12.6953 32.0312C12.6953 33.3252 13.8818 34.375 15.332 34.375C19.6936 34.375 23.2422 31.2207 23.2422 27.3438V21.0938C23.2422 18.0762 20.4846 15.625 17.0898 15.625ZM32.9102 15.625C29.5121 15.625 26.7578 18.0732 26.7578 21.0938C26.7578 24.1143 29.5121 26.5625 32.9102 26.5625C33.2112 26.5625 33.4996 26.5209 33.7891 26.4837V27.3438C33.7891 28.6357 32.6058 29.6875 31.1523 29.6875C29.7021 29.6875 28.5156 30.7422 28.5156 32.0312C28.5156 33.3203 29.7021 34.375 31.1523 34.375C35.5139 34.375 39.0625 31.2207 39.0625 27.3438V21.0938C39.0625 18.0762 36.3049 15.625 32.9102 15.625Z" fill="white"/>
                                <path opacity="0.2" d="M42.8571 3.125H7.14286C3.19754 3.125 0 5.92285 0 9.375V40.625C0 44.0771 3.19754 46.875 7.14286 46.875H42.8571C46.8025 46.875 50 44.0771 50 40.625V9.375C50 5.92285 46.7969 3.125 42.8571 3.125ZM23.2143 27.3437C23.2143 31.2207 19.6094 34.375 15.1786 34.375C13.6998 34.375 12.5 33.3252 12.5 32.0312C12.5 30.7373 13.7054 29.6875 15.1786 29.6875C16.6518 29.6875 17.8571 28.6328 17.8571 27.3437V26.4844C17.567 26.5234 17.2656 26.5625 16.9643 26.5625C13.5156 26.5625 10.7143 24.1113 10.7143 21.0937C10.7143 18.0762 13.5156 15.625 16.9643 15.625C20.4129 15.625 23.2143 18.0762 23.2143 21.0937V27.3437ZM39.2857 27.3437C39.2857 31.2207 35.6808 34.375 31.25 34.375C29.7768 34.375 28.5714 33.3301 28.5714 32.0312C28.5714 30.7324 29.7712 29.6875 31.25 29.6875C32.7266 29.6875 33.9286 28.6357 33.9286 27.3437V26.4844C33.6384 26.5234 33.3371 26.5625 33.0357 26.5625C29.5837 26.5625 26.7857 24.1143 26.7857 21.0937C26.7857 18.0732 29.5871 15.625 33.0357 15.625C36.4844 15.625 39.2857 18.0762 39.2857 21.0937V27.3437Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_8679_11829">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                            <button type="button">Testimonial</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item7" className={currentId==='list-item7'? "active list-item": "list-item"}>
                            <button type="button">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M2.32886 6.96413C1.5625 8.46819 1.5625 10.4371 1.5625 14.375V34.0625C1.5625 38.0005 1.5625 39.9692 2.32886 41.4734C3.00297 42.7965 4.07861 43.872 5.40163 44.5461C6.90569 45.3125 8.87463 45.3125 12.8125 45.3125H37.1875C41.1255 45.3125 43.0942 45.3125 44.5984 44.5461C45.9215 43.872 46.997 42.7965 47.6711 41.4734C48.4375 39.9692 48.4375 38.0005 48.4375 34.0625V14.375C48.4375 10.4371 48.4375 8.46819 47.6711 6.96413C46.997 5.64111 45.9215 4.56547 44.5984 3.89136C43.0942 3.125 41.1255 3.125 37.1875 3.125H12.8125C8.87463 3.125 6.90569 3.125 5.40163 3.89136C4.07861 4.56547 3.00297 5.64111 2.32886 6.96413Z" fill="white"/>
                                <path d="M14 14V36H36V14H14ZM32.3333 32.3333H17.6667V31.1111H32.3333V32.3333ZM32.3333 29.8889H17.6667V28.6667H32.3333V29.8889ZM32.3333 25H17.6667V17.6667H32.3333V25Z" fill="white"/>
                                </svg>
                            </button>
                            <button type="button">Our Blog</button>
                        </a>
                    </li>
                    <li>    
                        <a href="#list-item8" className={currentId==='list-item8'? "active list-item": "list-item"}>
                            <button>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_8679_11836)">
                                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M2.32886 6.96413C1.5625 8.46819 1.5625 10.4371 1.5625 14.375V34.0625C1.5625 38.0005 1.5625 39.9692 2.32886 41.4734C3.00297 42.7965 4.07861 43.872 5.40163 44.5461C6.90569 45.3125 8.87463 45.3125 12.8125 45.3125H37.1875C41.1255 45.3125 43.0942 45.3125 44.5984 44.5461C45.9215 43.872 46.997 42.7965 47.6711 41.4734C48.4375 39.9692 48.4375 38.0005 48.4375 34.0625V14.375C48.4375 10.4371 48.4375 8.46819 47.6711 6.96413C46.997 5.64111 45.9215 4.56547 44.5984 3.89136C43.0942 3.125 41.1255 3.125 37.1875 3.125H12.8125C8.87463 3.125 6.90569 3.125 5.40163 3.89136C4.07861 4.56547 3.00297 5.64111 2.32886 6.96413Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2633 17.1053C20.2633 14.5618 22.3839 12.5 24.9999 12.5C27.6159 12.5 29.7365 14.5618 29.7365 17.1053C29.7365 19.6487 27.6159 21.7105 24.9999 21.7105C22.3839 21.7105 20.2633 19.6487 20.2633 17.1053ZM24.9999 24.0132C20.3038 24.0132 16.4096 27.3336 15.6577 31.6913C15.5424 32.3593 15.7354 33.0427 16.1854 33.5599C16.6354 34.0768 17.2967 34.375 17.9933 34.375H32.0068C32.7033 34.375 33.3645 34.0768 33.8145 33.5599C34.2645 33.0427 34.4575 32.3593 34.3424 31.6913C33.5905 27.3336 29.6963 24.0132 24.9999 24.0132Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_8679_11836">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                            <button type="button">Contact Us</button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="content">
                    <div className="image-hero">
                        <img src={HeroImage} alt="hero image" />
                    </div><br />
                    <h3 className="name">Alex Carry</h3><br />
                    <p className="description">
                    Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.
                    </p><br /><br />
                    <ul>
                        <li><button><FaXTwitter id='twitter'/></button></li>
                        <li><button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_8679_11863)">
                                <path d="M2.18164 11.6364C2.18164 7.17946 2.18164 4.951 3.56622 3.56641C4.95082 2.18182 7.17927 2.18182 11.6362 2.18182C16.0931 2.18182 18.3215 2.18182 19.7062 3.56641C21.0907 4.951 21.0907 7.17946 21.0907 11.6364C21.0907 16.0932 21.0907 18.3217 19.7062 19.7064C18.3215 21.0909 16.0931 21.0909 11.6362 21.0909C7.17927 21.0909 4.95082 21.0909 3.56622 19.7064C2.18164 18.3217 2.18164 16.0932 2.18164 11.6364Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M15.9997 11.6364C15.9997 14.0464 14.0461 16 11.6361 16C9.22613 16 7.27246 14.0464 7.27246 11.6364C7.27246 9.2264 9.22613 7.27274 11.6361 7.27274C14.0461 7.27274 15.9997 9.2264 15.9997 11.6364Z" stroke="white" stroke-width="2"/>
                                <path opacity="0.4" d="M17.4637 6.54544H17.4541" stroke="white" stroke-width="2.14118" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_8679_11863">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>                          
                            </button></li>
                        <li><button><FaFacebookF id='face'/></button></li>
                        <li><button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_8679_11877)">
                                <path d="M4.60588 9.45456H4.12103C3.20679 9.45456 2.74968 9.45456 2.46566 9.74425C2.18164 10.034 2.18164 10.5002 2.18164 11.4327V19.84C2.18164 20.7725 2.18164 21.2388 2.46566 21.5285C2.74968 21.8182 3.20679 21.8182 4.12103 21.8182H4.60588C5.52012 21.8182 5.97724 21.8182 6.26126 21.5285C6.54528 21.2388 6.54528 20.7725 6.54528 19.84V11.4327C6.54528 10.5002 6.54528 10.034 6.26126 9.74425C5.97724 9.45456 5.52012 9.45456 4.60588 9.45456Z" stroke="white" stroke-width="1.5"/>
                                <path opacity="0.4" d="M6.54528 4.36364C6.54528 5.56863 5.56844 6.54546 4.36346 6.54546C3.15847 6.54546 2.18164 5.56863 2.18164 4.36364C2.18164 3.15866 3.15847 2.18182 4.36346 2.18182C5.56844 2.18182 6.54528 3.15866 6.54528 4.36364Z" stroke="white" stroke-width="2"/>
                                <path d="M12.2493 9.45456H11.4323C10.4998 9.45456 10.0335 9.45456 9.74379 9.74425C9.4541 10.034 9.4541 10.5002 9.4541 11.4327V19.84C9.4541 20.7725 9.4541 21.2388 9.74379 21.5285C10.0335 21.8182 10.4998 21.8182 11.4323 21.8182H11.9268C12.8593 21.8182 13.3256 21.8182 13.6153 21.5285C13.905 21.2388 13.905 20.7725 13.905 19.84L13.9051 16.3783C13.9051 14.7396 14.4273 13.411 15.9701 13.411C16.7414 13.411 17.3668 14.0753 17.3668 14.8947V19.3456C17.3668 20.2781 17.3668 20.7443 17.6565 21.034C17.9461 21.3237 18.4124 21.3237 19.3449 21.3237H19.8382C20.7705 21.3237 21.2367 21.3237 21.5264 21.0341C21.8161 20.7445 21.8162 20.2784 21.8164 19.3461L21.8177 13.9057C21.8177 11.4476 19.4798 9.4548 17.1658 9.4548C15.8484 9.4548 14.6732 10.1005 13.9051 11.1103C13.905 10.4871 13.905 10.1755 13.7697 9.94416C13.6839 9.79764 13.5619 9.67565 13.4154 9.58994C13.184 9.45456 12.8725 9.45456 12.2493 9.45456Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_8679_11877">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button></li>
                        <li><button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9998 21.8182C17.4223 21.8182 21.818 17.4224 21.818 12C21.818 6.57757 17.4223 2.18182 11.9998 2.18182C6.57739 2.18182 2.18164 6.57757 2.18164 12C2.18164 17.4224 6.57739 21.8182 11.9998 21.8182Z" stroke="white" stroke-width="2"/>
                                <path opacity="0.4" d="M21.818 13.1244C20.9081 12.9514 19.9722 12.8612 19.0171 12.8612C13.762 12.8612 9.08809 15.5906 6.10891 19.8277M18.8726 4.89952C15.8 8.54939 11.1829 10.8708 6.02018 10.8708C4.69939 10.8708 3.41429 10.7188 2.18164 10.4316M14.57 21.8182C14.8161 20.61 14.9453 19.3587 14.9453 18.0769C14.9453 11.7911 11.8371 6.23953 7.09073 2.90909" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                            </button></li>
                    </ul><br />
                    <button type="button" className='download'><p>
                        <span>DOWNLOAD NOW</span>
                        <span><FiDownload/></span></p>
                    </button><br />
                    <p className="copyright">
                    © 2024 OVRO. All Rights Reserved.
                    </p><br />
                </div>
            </div>
        </div>
        </>
    )
}

export default Left;