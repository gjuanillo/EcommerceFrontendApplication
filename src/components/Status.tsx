const Status = ({ text, icon: Icon, color }) => {
    return (
        <div className={`${color} p-2 font-medium rounded flex items-center gap-1`}>
            {text} <Icon size={15} />
        </div>
    )
}

export default Status;
