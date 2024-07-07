function AppLink({ imgSrc, name, label }) {
	return (
		<a href="#" className="app-link">
			<img src={imgSrc} alt={name} />
			<div>
				<div className="app-link-label">{label}</div>
				<div className="app-link-name">{name}</div>
			</div>
		</a>
	);
}

export default AppLink;
