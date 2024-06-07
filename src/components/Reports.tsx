export default function Reports() {
    return (
        <section className="flex flex-row rounded-lg bg-white">
            <div className="w-16 h-16 rounded-full overflow-hidden m-5">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col ml-3 my-6 gap-3">
                <p>@loremipsum</p>
                <p className="font-semibold">Lorem Ipsum</p>
                <img src="https://via.placeholder.com/736x345" alt="additional content" className="mt-3 mr-24 mb-5 rounded-lg" />
            </div>
        </section>
    );
}
