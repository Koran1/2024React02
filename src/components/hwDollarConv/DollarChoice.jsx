
function DollarChoice({ unit, setUnit }) {
    return (
        <div className="dollarBox">
            <input type="radio" value='원' checked={unit === '원'}
                onChange={(e) => setUnit(e.target.value)} /> 원
            <input type="radio" value='$' checked={unit === '$'}
                onChange={(e) => setUnit(e.target.value)} /> $
        </div>
    );
}

export default DollarChoice;