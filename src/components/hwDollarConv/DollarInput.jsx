function DollarInput({ money, unit, setMoney }) {
    return (
        <div className="dollarBox">

            <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} />
            {unit}
        </div>
    );
}

export default DollarInput;