function App() {
    return React.createElement(
        'div',
        { className: 'clock' },
        React.createElement(
            'div',
            { className: 'timer-output' },
            React.createElement(
                'div',
                { id: 'timer-label' },
                'Session||Break'
            ),
            React.createElement(
                'div',
                { id: 'time-left' },
                '25:00'
            )
        ),
        React.createElement(
            'div',
            { className: 'btn-control' },
            React.createElement(
                'button',
                { id: 'start_stop' },
                'Start||Stop'
            ),
            React.createElement(
                'button',
                { id: 'reset' },
                'Reset'
            )
        ),
        React.createElement(
            'div',
            { className: 'setting' },
            React.createElement(
                'div',
                { className: 'break-wrap' },
                React.createElement(
                    'div',
                    { id: 'break-label' },
                    'Break Length'
                ),
                React.createElement(
                    'div',
                    { className: 'break-setting' },
                    React.createElement(
                        'button',
                        { id: 'break-decrement' },
                        '-'
                    ),
                    React.createElement(
                        'div',
                        { id: 'break-length' },
                        '5'
                    ),
                    React.createElement(
                        'button',
                        { id: 'break-increment' },
                        '+'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'session-wrap' },
                React.createElement(
                    'div',
                    { id: 'session-label' },
                    'Session Length'
                ),
                React.createElement(
                    'div',
                    { className: 'session-setting' },
                    React.createElement(
                        'button',
                        { id: 'session-decrement' },
                        '-'
                    ),
                    React.createElement(
                        'div',
                        { id: 'session-length' },
                        '25'
                    ),
                    React.createElement(
                        'button',
                        { id: 'session-increment' },
                        '+'
                    )
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));