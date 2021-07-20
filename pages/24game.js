<script>
    function cal24() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var num4 = Number(document.getElementById("num4").value);
  var list = [num1, num2, num3, num4];
  var result = dfs(list);

  function dfs(nums) {
        console.log(nums);
    if (nums.length == 1) {
      return Math.abs(nums[0] - 24) < 0.00001;
    }

    let ans = false;
    for (let i = 0; i < nums.length; {
      for (let j = i + 1; j < nums.length; {
        // grab other numbers
        const rest = [];
        for (let k = 0; k < nums.length; {
          if (k != i && k != j) rest.push(nums[k]);
        }
        // grab all possibilities
        const target = [
          nums[i] + nums[j],
          nums[i] - nums[j],
          nums[j] - nums[i],
          nums[i] * nums[j]
        ];
        if (nums[i] !== 0) target.push(nums[j] / nums[i]);
        if (nums[j] !== 0) target.push(nums[i] / nums[j]);
        // try next around
        for (const t of target) {
        ans = ans || dfs([t, ...rest]);
        }
      }
    }

    return ans;

  }
  document.getElementById("result").innerHTML = result;
}
</script>