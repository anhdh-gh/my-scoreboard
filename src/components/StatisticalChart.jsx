import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const StatisticalChart = (props) => {
    const scores = useSelector(state => state.scores)

    const data = {
        labels: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'],
        datasets: [
            {
                label: 'Số môn',
                data: [
                    scores?.filter(item => item?.tongKet === '4.0')?.length,
                    scores?.filter(item => item?.tongKet === '3.7')?.length,
                    scores?.filter(item => item?.tongKet === '3.5')?.length,
                    scores?.filter(item => item?.tongKet === '3.0')?.length,
                    scores?.filter(item => item?.tongKet === '2.5')?.length,
                    scores?.filter(item => item?.tongKet === '2.0')?.length,
                    scores?.filter(item => item?.tongKet === '1.5')?.length,
                    scores?.filter(item => item?.tongKet === '1.0')?.length,
                    scores?.filter(item => item?.tongKet === '0.0')?.length,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'hide',
            },
            title: {
                display: true,
                text: 'Biểu đồ thống kê điểm',
                position: 'top',
                color: '#d30000'
            },
        },
    }

    return <div className="h-100 border border-danger">
        <Bar data={data} options={options} />
    </div>
}

export default StatisticalChart