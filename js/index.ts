/**
 * Created by Kyle Karpack on 12/9/2016.
 */

import Toast from 'grommet/components/Toast';


class HelloWorldApp extends React.Component {
    render () {
        return (`
            <App>
                <Title>Hello World</Title>
                <p>Hello from a Grommet page!</p>
            </App>
    `   );
    }
};

var element = document.getElementById('content');
ReactDOM.render(React.createElement("HelloWorldApp"), element);