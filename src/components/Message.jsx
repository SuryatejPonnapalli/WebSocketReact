export default function Message() {
  return (
    <section className="flex flex-row items-center rounded-3xl bg-gray-100 mx-2 py-3 px-4 justify-between">
      <div className="flex flex-row space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill=""
          class="w-6 h-6 text-[#FFAA01]"
        >
          <path
            fill-rule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Type something here...."
          className="bg-gray-100 border-none h-10 text-md outline-none"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 -rotate-45"
      >
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
    </section>
  );
}
