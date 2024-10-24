export default function Blog() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <div className="flex justify-between w-full p-4">
          <div>
            <div>Medical</div>
            <div>Tech blogs</div>
          </div>
          <div>
            <select name="blogs" id="blog">
              <option value="medical">Medical</option>
              <option value="tech">Technology</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-xl font-bold">Blog 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quis rerum doloribus totam repudiandae magnam assumenda quisquam
              soluta in iste....
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Blog 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quis rerum doloribus totam repudiandae magnam assumenda quisquam
              soluta in iste....
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Blog 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quis rerum doloribus totam repudiandae magnam assumenda quisquam
              soluta in iste....
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Blog 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              quis rerum doloribus totam repudiandae magnam assumenda quisquam
              soluta in iste....
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
