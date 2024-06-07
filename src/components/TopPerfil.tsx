export default function TopPerfil() {
    return(
        <section className="flex flex-col items-center justify-center p-20 rounded-b-lg gap-5 bg-white">
            <div className="w-44 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
            <p>@loremipsum</p>
        </section>
    )
}