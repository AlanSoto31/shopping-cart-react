
const currentDate = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        
        const days = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ]
        const today = new Date()
        const day = days[today.getDay()]
        const date = today.getDate()
        const month = months[today.getMonth()]
        const year = today.getFullYear()
        return `${day}-${date}-${month}-${year}`
}

export default currentDate
