worker : cloud9-vlang-worker-wrapped.js

cloud9-vlang-worker-wrapped.js : cloud9-vlang-worker.js
	./wrap-in-js.sh $<
