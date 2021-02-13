import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import './googleMap.css'



const containerStyle = {
    width: '80%',
    height: '50%'
}

export class GoogleMap extends Component {
    render() {
        return (
            <div className='mapStyle'>
                <Map google={this.props.google} zoom={14}
                    containerStyle={containerStyle}

                    initialCenter={{
                        lat: 55.74647599193656,
                        lng: 37.62894967906556

                    }}

                    onClick={this.onMapClicked}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Cauza'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCnv6GOuZclZuydoSBYEBwq4Y6u4yn6wgI")
})(GoogleMap)