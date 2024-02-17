const PublicPage = () => {
  return (
    <div className="bg-post-page">
      <div className="flex flex-row justify-between shadow-2xl w-full px-10 py-6 font-fira-sans">
        <h2 className="text-lg text-blue-700 font-bold">aluritter</h2>

        <div className="information flex flex-row gap-5 items-center">
          <span>davisllvsnt57@gmail.com</span>

          <button className="w-1/2 p-2.5 rounded-md border-0 text-white shadow-sm bg-blue-700 hover:brightness-90">
            Sair
          </button>
        </div>
      </div>

      <div className="text-area-box"></div>

      {/* <div className="publications">
        <Publications key={id} data={item {publication, user, data}}/>
      </div> */}
    </div>
  );
};

export default PublicPage;
