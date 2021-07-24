<template>
  <section class="post-view">
    <div class="post-head">
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
    </div>
    <div class="post-sub-head">
      <time-ago
        :last-updated="$page.frontmatter.date || $page.lastUpdated"
        class="post-date"
      />
    </div>
    <Content />
    <div ref="comment"></div>
  </section>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import TimeAgo from "./TimeAgo";

export default {
  components: {
    TimeAgo,
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: "459f8e75f57d8b3f88e8",
      clientSecret: "08ba75df314e09dd9206d187ccbcbfa4a0228b58",
      repo: "cj0x39e", // The repository of store comments,
      owner: "cj0x39e",
      admin: ["cj0x39e"],
      id: location.pathname, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    });

    gitalk.render(this.$refs.comment);
  },
};
</script>
