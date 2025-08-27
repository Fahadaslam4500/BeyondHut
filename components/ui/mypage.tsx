import FallingButtons from "./FallingText";


const MyPage = () => {


    return (
        <div className='h-[500px] bg-[#F3FBFE] container max-w-[740px] py-3'>
            <FallingButtons
                trigger="auto"
                gravity={0.6}
                buttons={[
                    { label: "£25K/year", bgColor: "#DBF5FF" },
                    { label: "£25K/year", bgColor: "#323232" },
                    { label: "Full Admin Support", bgColor: "#323232" },
                    { label: "Plug-and-Play", bgColor: "#00B7EB" },
                    { label: "Scalable", bgColor: "#323232" },
                    { label: "No Long-Term Contract", bgColor: "#DBF5FF" },
                    { label: "Proven ROI", bgColor: "#00B7EB" },
                    { label: "More Time", bgColor: "#323232" },
                    { label: "Faster Closures", bgColor: "#DBF5FF" },
                ]}
            />

        </div>
    );
};

export default MyPage;