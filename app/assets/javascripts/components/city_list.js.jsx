class PlaceList extends React.Component {

	render() {
		const citiesListItems = this.props.cities.map((city) => {
		return (
			<City 
				key={city.id}
				city={city}
				handleDelete={this.props.handleDelete} />
		);
	})
	
		return (
			<section className="city-list">
				<ul>{citiesListItems}</ul>
			</section>
		)
	}
};