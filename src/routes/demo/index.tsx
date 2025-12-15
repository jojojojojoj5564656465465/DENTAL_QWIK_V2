import { component$ } from "@builder.io/qwik";
import { flex } from "@recipe";
export default component$(() => {
    return (
        <section class={[flex({ direction: "column", size: "small", theme: "darkBlueBanner" }), 'text-red-800']}>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat
                molestiae, praesentium pariatur facere beatae quos consectetur in rem
                maxime iure consequatur magni, optio minus dolore neque est enim ducimus
                ab quisquam excepturi iusto quis. Sint similique omnis non voluptatem
                quia vitae, quis sed eum ipsum maiores eveniet inventore facere.
            </div>
        </section>
    );
});
