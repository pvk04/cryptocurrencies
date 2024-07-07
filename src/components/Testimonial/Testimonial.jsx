function Testimonial({ imgSrc, name, username, text }) {
	return (
		<div className="testimonial">
			<div className="testimonial-user">
				<div className="testimonial-user-img">
					<img src={imgSrc} alt={name} />
				</div>
				<div className="testimonial-user-info">
					<span className="testimonial-user-name">{name}</span>
					<span className="testimonial-user-tag">{username}</span>
				</div>
			</div>
			<p>{text}</p>
		</div>
	);
}

export default Testimonial;
