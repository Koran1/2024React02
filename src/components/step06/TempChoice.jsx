

function TempChoice({ unit, onChangeUnit }) {
    return (
        <div className='tempBox'>
            <label>
                <input type="radio" value='Celsius' checked={unit === 'Celsius'}
                    onChange={(e) => onChangeUnit(e.target.value)} />
                Celsius</label>
            <label>
                <input type="radio" value='Fahrenheit' checked={unit === 'Fahrenheit'}
                    onChange={(e) => onChangeUnit(e.target.value)} />
                Fahrenheit</label>
        </div>
    );
}

export default TempChoice;