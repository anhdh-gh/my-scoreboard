import { Table, Button, Modal, Form } from 'react-bootstrap'
import { SearchBox } from './index'
import { useState } from "react"
import { useSelector } from 'react-redux'
import { Util, Firebase, Notify } from '../utils'
import _ from 'lodash'

const Scoreboard = (props) => {
    const { className } = props

    const [search, setSearch] = useState('')
    const [score, setScore] = useState()

    const scores = Util.findScore(useSelector(state => state.scores), search)
    const userInfo = useSelector(state => state.userInfo)
    const rule = useSelector(state => state.rule)

    const handleSubmit = e => {
        e.preventDefault()

        // Validate
        if (!score?.tenHocPhan?.trim()?.length)
            return Notify.error('Tên học phần không được để trống')
        if (!score?.soTinChi?.trim()?.length)
            return Notify.error('Số tín chỉ không được để trống')

        const soTinChiFloat = parseFloat(score?.soTinChi?.trim())
        if (isNaN(score?.soTinChi) || isNaN(soTinChiFloat))
            return Notify.error('Số tín chỉ phải là một số thực')
        if (soTinChiFloat <= 0)
            return Notify.error('Số tín chỉ phải lớn hơn 0')

        // Kiểm tra là thêm mới hay cập nhật
        const obj = { 
            tenHocPhan: score?.tenHocPhan?.trim(),
            soTinChi: score?.soTinChi?.trim(),
            tongKet: score?.tongKet.trim()
        }

        if (score?.id) Firebase.updateScore(score?.id, obj, () => setScore({ ...score, showCE: false }))
        else Firebase.addScore(obj, () => setScore({ ...score, showCE: false }))
    }

    return <div className={className}>

        <div className="d-flex align-items-center flex-column mb-4">
            <h1 className="fw-bold lh-base">Bảng điểm</h1>
            <div className="rounded-pill mb-4" style={{ width: '8rem', height: '0.2rem', backgroundColor: '#d30000' }}></div>

            <SearchBox
                className="mt-1"
                placeholder="Tìm kiếm học phần"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>

        <Table bordered hover responsive className="border border-danger align-middle">
            <thead
                style={{ backgroundColor: '#d30000' }}
                className="text-white align-middle"
            >
                <tr className="text-center align-middle text-nowrap">
                    <th>STT</th>
                    <th>Tên học phần</th>
                    <th>Số tín chỉ</th>
                    <th>Tổng kết</th>
                    <th>Điểm chữ</th>
                    {!_.isEmpty(userInfo) && !_.isEmpty(rule) && <th scope="col" colSpan="2">Actions</th>}
                </tr>
            </thead>
            <tbody className="fw-bold align-middle">
                {
                    scores?.map((score, index) => <tr key={score?.id}>
                        <td className="text-center align-middle">{index + 1}</td>
                        <td>{score?.tenHocPhan}</td>
                        <td className="text-center align-middle">{score?.soTinChi}</td>
                        <td className="text-center align-middle">{score?.tongKet}</td>
                        <td className="ps-4 ps-lg-5">{score?.diemChu}</td>
                        {!_.isEmpty(userInfo) && !_.isEmpty(rule) && <td
                            className="text-center text-primary cursor-pointer"
                            onClick={() => setScore({ ...score, showCE: true })}
                        ><i className="fas fa-edit" /></td>}
                        {!_.isEmpty(userInfo) && !_.isEmpty(rule) && <td
                            className="text-center text-danger cursor-pointer"
                            onClick={() => setScore({ ...score, showConfirm: true })}
                        ><i className="fas fa-trash-alt" /></td>}
                    </tr>)
                }
            </tbody>
        </Table>

        <div className="d-flex justify-content-between">
            {_.isEmpty(userInfo) && <Button onClick={e => Firebase.signInGoogle()}><i className="fab fa-google" /> Sign in</Button>}
            {!_.isEmpty(userInfo) && !_.isEmpty(rule) && <Button onClick={e => setScore({ tenHocPhan: '', soTinChi: '', tongKet: '4.0', showCE: true })} variant="success"> <i className="fas fa-plus" /> Thêm</Button>}
            {!_.isEmpty(userInfo) && <Button onClick={e => Firebase.signOut()}><i className="fas fa-sign-out-alt" /> Sign out</Button>}
        </div>

        <Modal show={score?.showConfirm} onHide={() => setScore({ ...score, showConfirm: false })}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Bạn có chắc chắn muốn xóa học phần:</h5>
                <ul>
                    <li>Tên học phần: {score?.tenHocPhan}</li>
                    <li>Số tín chỉ: {score?.soTinChi}</li>
                    <li>Tổng kết: {score?.tongKet}</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setScore({ ...score, showConfirm: false })}>Không</Button>
                <Button variant="danger" onClick={e => Firebase.removeScore(score?.id, () => setScore({ ...score, showConfirm: false }))}>Có</Button>
            </Modal.Footer>
        </Modal>

        <Modal show={score?.showCE} onHide={() => setScore({ ...score, showCE: false })}>
            <Modal.Header closeButton>
                <Modal.Title>{score?.id ? 'Chỉnh sửa học phần' : 'Thêm học phần'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Tên học phần:</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên học phần" value={score?.tenHocPhan} onChange={e => setScore({ ...score, tenHocPhan: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Số tín chỉ:</Form.Label>
                        <Form.Control type="text" placeholder="Nhập số tín chỉ" value={score?.soTinChi} onChange={e => setScore({ ...score, soTinChi: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Tổng kết:</Form.Label>
                        <Form.Select value={score?.tongKet} onChange={e => setScore({ ...score, tongKet: e.target.value })}>{['4.0', '3.7', '3.5', '3.0', '2.5', '2.0', '1.5', '1.0', '0']?.map((item, index) => <option key={index} value={item}>{item}</option>)}</Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={score?.id ? 'primary' : 'success'} onClick={handleSubmit}>{score?.id ? 'Cập nhật' : 'Thêm'}</Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default Scoreboard