const padDate = (date) => (
    typeof date === 'number' ? 
        date.toString().padStart(2, '0') : date.padStart(2, '0')
)

export default padDate;