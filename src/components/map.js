import GoogleMapReact from 'google-map-react'

const map = ({center, zoom}) => {
    return (
        <div className = "map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBBWqfdzAlnHCzm4IG5qZ2o3F45infMH1Q' }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >


            </GoogleMapReact>
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}
export default Map
