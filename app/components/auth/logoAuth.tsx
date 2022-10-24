
interface Props {
    title : string
}

const LogoAuth = ({title}:Props)=>{
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">{title}</h2>
        </div>
    )
}

export default LogoAuth;