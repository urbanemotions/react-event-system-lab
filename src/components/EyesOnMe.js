import React from 'react';

class EyesOnMe extends React.Component {
    
    onFocus = () => console.log('Good!')
    onBlur = () => console.log('Hey! Eyes on me!')
   

    render() {
        return (
            <div>
                <button onFocus={this.onFocus} onBlur={this.onBlur}>
                    Button
                </button>
            </div>

        )
    }
}

export default EyesOnMe;