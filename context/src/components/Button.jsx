import Component1 from './Component1'

const Button = ({ count }) => {
    return (
        <>
            <button>
                <span>
                    <Component1 count={count} />
                </span>
            </button>
        </>
    )
}

export default Button