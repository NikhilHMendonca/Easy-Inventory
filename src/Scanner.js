import React, { Component } from "react";
import QrReader from "react-qr-scanner";

const previewStyle = {
    height: 240,
    width: 320,
  }

class Scanner extends Component {
	state = {
		delay: 100,
		result: "No result"
	};

	handleScan = data => {
		this.setState({
			result: data
		});
	};
	handleError = err => {
		console.error(err);
	};

	render() {
		return (
			<div>
				<QrReader
					delay={this.state.delay}
					style={previewStyle}
					onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode="rear"
				/>
				<p>{this.state.result}</p>
			</div>
		);
	}
}

export default Scanner;
