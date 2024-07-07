function Stat({ text, label }) {
	return (
		<div className="stat">
			<div className="stat-number">{text}</div>
			<div className="stat-label">{label}</div>
		</div>
	);
}

export default Stat;
