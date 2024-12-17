if [ $# -eq 0 ]; then
	>&2 echo "No arguments supplied"
	exit 1
else
	for i in $@; do
		mkdir ex"$i"
	done
fi