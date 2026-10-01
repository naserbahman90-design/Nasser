# peptid.co.uk

Public website for peptid.co.uk. The pages state what the site is: it does not sell unlicensed medicines, and there is no shop.

## Run locally

From the repository root:

```bash
python3 serve.py
```

Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

- Home: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
- Legal: [http://127.0.0.1:8080/legal/](http://127.0.0.1:8080/legal/)
- Contact: [http://127.0.0.1:8080/contact/](http://127.0.0.1:8080/contact/)

Choose another port with `python3 serve.py --port 8765`.

No install and no build step. Public Sans (SIL Open Font License) is included in `fonts/`. Serve the files from the host root so the page links resolve.
