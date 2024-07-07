function Stat({ text, label }) {
	return (
		<div className="stat">
			<p className="stat-number">{text}</p>
			<label className="stat-label">{label}</label>
		</div>
	);
}

export default Stat;
