import { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component<{children: any}> {
    constructor(props: any) {
        super(props)

        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error: any){
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            hasError: true,
            error,
            errorInfo
        })
    }

    render () {
        if((this.state as any).hasError){
            return(
                <div className="error-boundary">
                    <h1>The application encountered an error</h1>
                    <h4>Reload the page if error persists contact support</h4>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary;