import { useSelector } from 'react-redux'

const MyInfo = (props) => {
    const scores = useSelector(state => state?.scores)
    const soTinChiTichLuy = scores?.reduce((sum, score) => sum + parseInt(score?.soTinChi), 0)
    const diemTrungBinhTichLuy = (scores?.reduce((sum, score) => sum + parseInt(score?.soTinChi) * parseFloat(score?.tongKet), 0) / soTinChiTichLuy).toFixed(2)

    return <div className="table-responsive h-100">
        <table className="table table-bordered table-hover border border-danger align-middle m-0 h-100">
            <thead style={{ backgroundColor: '#d30000' }} className="text-white align-middle text-center">
                <tr>
                    <th scope="col" colSpan="2">Thông tin sinh viên</th>
                </tr>
            </thead>
            <tbody className="fw-bold align-middle">
                <tr className="fw-bold align-middle">
                    <td>Tên sinh viên</td>
                    <td>Đỗ Hùng Anh</td>
                </tr>
                <tr className="fw-bold align-middle">
                    <td>Mã sinh viên</td>
                    <td>B18DCCN010</td>
                </tr>
                <tr className="fw-bold align-middle">
                    <td>Khoa</td>
                    <td>Công nghệ thông tin</td>
                </tr>
                <tr className="fw-bold align-middle">
                    <td>Số tín chỉ tích lũy</td>
                    <td>{soTinChiTichLuy}</td>
                </tr>
                <tr className="fw-bold align-middle">
                    <td>Điểm trung bình tích lũy</td>
                    <td>{diemTrungBinhTichLuy}</td>
                </tr>
            </tbody>
        </table>        
    </div>

}

export default MyInfo