
export default () => (
    {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleTimeString()
    }
)