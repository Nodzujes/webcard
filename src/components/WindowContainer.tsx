import React from "react";

type Props = {
    children: React.ReactNode;
};

function WindowContainer({ children }: Props) {
    return (
        <section className="window">
            {children}
        </section>
    );
}

export default WindowContainer;