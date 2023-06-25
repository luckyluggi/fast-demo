<script setup lang="ts">
</script>

<template>
    <div style="display: flex; flex-direction: column; width: 100vw; height: 100vh;">
        <example-toolbar style="grid-area: header;">
            <span>App</span>
            <example-avatar name="John Doe" shape="circle" fill="accent-primary" alt="Users profile image"
                link="#"></example-avatar>
            <example-button char="!">Login</example-button>
        </example-toolbar>
        <div style="display: flex; flex-grow: 1;">
            <example-sidebar style="grid-area: aside; width: 100%; max-width: 200px;">
                <ul style="display: flex;flex-direction: column;margin: 0;padding: 0;align-items: stretch;">
                    <i>
                        <example-anchor appearance="hypertext" href="#">Nav-1</example-anchor>
                    </i>
                    <i>
                        <example-anchor appearance="hypertext" href="#">Nav-2</example-anchor>
                    </i>
                    <i>
                        <example-anchor appearance="hypertext" href="#">Nav-3</example-anchor>
                    </i>
                </ul>
            </example-sidebar>
            <main style="grid-area: main;">
                <router-view />
            </main>
        </div>
    </div>
</template>  