export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>Overlay</div>
            <div>{children}</div>
        </div>
    );
}
