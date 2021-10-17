import ptitLogo from '../assets/images/ptit-logo.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Header = (props) => {
    return <div className="mt-3 pb-2 border-bottom border-3 border-danger d-flex">
        <img className="d-none d-md-inline" src={ptitLogo} alt="Logo ptit"/>
        <div className="flex-fill text-center text-sm-start d-sm-flex justify-content-between flex-md-column flex-lg-row">
            <div>
                <h5 className="fw-bold text-muted">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</h5>
                <h5 className="d-none d-sm-block text-danger fw-normal">Posts and Telecommunications Institute of Technology</h5>
            </div>
            <div className="fs-4 d-flex d-sm-block d-md-flex justify-content-center justify-content-sm-start">
                <div className="d-flex justify-content-between">
                    <a href="https://www.facebook.com/DoHungAnh27092000/">
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>Facebook</Tooltip>}>
                            <i className="fab fa-facebook"/>
                        </OverlayTrigger>    
                    </a>
   
                    <a href="mailto:dohunganh27092000@gmail.com" className="ms-2 ms-sm-0 ms-md-2">
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>Mail</Tooltip>}>
                            <i className="far fa-envelope text-danger"/>
                        </OverlayTrigger>
                    </a>
                </div>

                <div className="ms-2 ms-sm-0 ms-md-2">
                    <a href="https://github.com/DoHungAnh-27-09-2000">
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>Github</Tooltip>}>
                            <i className="fab fa-github text-dark"/>
                        </OverlayTrigger> 
                    </a>
                                                       
                    <a href="https://www.youtube.com/channel/UCuZUp0A9aLrfHSPr3eg05Ow" className="ms-2">
                        <OverlayTrigger placement="bottom" overlay={<Tooltip>Youtube</Tooltip>}>
                            <i className="fab fa-youtube text-danger"/>
                        </OverlayTrigger>
                    </a>
                </div>
            </div>            
        </div>

    </div>
}

export default Header