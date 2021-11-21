export default function Footer() {
    return (
        <>
            {" "}
            <div className="footer">
                <div className="footer-stick"></div>
            </div>
            <style jsx>
                {`
                    .footer {
                        width: 375px;
                        height: 34px;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        margin-top: 16px;
                    }
                    .footer-stick {
                        width: 134px;
                        height: 5px;
                        background: #474646;
                        border-radius: 100px;
                    }
                `}
            </style>
        </>
    );
}
