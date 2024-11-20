
function TempInput({ value, unit, onChangeValue }) {
    return (
        <div className="tempBox">
            <input type="number"
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
                placeholder='In units' />
            <span>{unit}</span>
        </div >
    );
}

export default TempInput;