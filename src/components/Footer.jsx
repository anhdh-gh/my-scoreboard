import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Footer = (props) => {
    return <div className="
                    mt-4
                    border-bottom border-4 border-danger
                    d-flex flex-column align-items-center justify-content-around 
                    p-2"
                style={{backgroundColor: "#f3f7f9"}}
            >
        <div>
            <a href="https://www.facebook.com/DoHungAnh27092000/" className="px-2">
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Facebook</Tooltip>}>
                    <i className="fab fa-facebook h3" />
                </OverlayTrigger>
            </a>

            <a href="mailto:dohunganh27092000@gmail.com" className="px-2">
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Mail</Tooltip>}>
                    <i className="far fa-envelope text-danger h3" />
                </OverlayTrigger>
            </a>

            <a href="https://github.com/DoHungAnh-27-09-2000" className="px-2">
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Github</Tooltip>}>
                    <i className="fab fa-github text-dark h3" />
                </OverlayTrigger>
            </a>

            <a href="https://www.youtube.com/channel/UCuZUp0A9aLrfHSPr3eg05Ow" className="px-2">
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Youtube</Tooltip>}>
                    <i className="fab fa-youtube text-danger h3" />
                </OverlayTrigger>
            </a>
        </div>

        <p className="fw-bold text-center m-0">
            ©{new Date().getFullYear()}. ALL RIGHTS RESERVED. | Design by <a className="text-danger text-decoration-none" href="https://www.facebook.com/DoHungAnh27092000/">
                Đỗ Hùng Anh
            </a>
        </p>

    </div>
}

export default Footer