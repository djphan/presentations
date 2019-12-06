3. Providing a Screen Reader Only Landmark
<pre>
    <code class="hljs">
        <style>
        .screen-reader-only {
                clip: rect(1px, 1px, 1px, 1px);
                clip-path: inset(50%);
                height: 1px;
                width: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
        }
        </style>
    </code>
</pre>

<pre>
    <code class="hljs">
        <p class="screen-reader-only">This content is hidden only from sighted users only.</p>
    </code>
</pre>
